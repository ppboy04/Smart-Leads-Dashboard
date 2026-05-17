import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import { Lead, ApiResponse } from '../types';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ArrowLeft, Edit, Trash2, Mail, User, Calendar, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { useAuth } from '../context/AuthContext';
import { LeadModal } from '../components/LeadModal';

export const LeadDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const fetchLead = async () => {
    setLoading(true);
    try {
      const response = await api.get<ApiResponse<Lead>>(`/leads/${id}`);
      setLead(response.data.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch lead details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLead();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    try {
      await api.delete(`/leads/${id}`);
      navigate('/');
    } catch (err) {
      alert('Failed to delete lead');
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (error || !lead) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <p className="text-destructive font-medium">{error || 'Lead not found'}</p>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Link to="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setIsEditModalOpen(true)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          {user?.role === 'admin' && (
            <Button variant="destructive" size="sm" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold">{lead.name}</h1>
                <p className="text-muted-foreground flex items-center mt-1">
                  <Mail className="h-4 w-4 mr-2" />
                  {lead.email}
                </p>
              </div>
              <Badge variant={lead.status === 'Qualified' ? 'success' : lead.status === 'Lost' ? 'destructive' : 'default'} className="text-sm px-3 py-1">
                {lead.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-8 py-6 border-t border-b">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Source</p>
                <p className="flex items-center font-medium">
                  <ExternalLink className="h-4 w-4 mr-2 text-primary" />
                  {lead.source}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Created Date</p>
                <p className="flex items-center font-medium">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  {format(new Date(lead.createdAt), 'MMMM dd, yyyy')}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-3">Assigned To</p>
              <div className="flex items-center p-3 bg-muted/30 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{lead.createdBy.name}</p>
                  <p className="text-xs text-muted-foreground">{lead.createdBy.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar / Quick Actions */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline" onClick={() => window.open(`mailto:${lead.email}`)}>
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h3 className="font-semibold mb-2">History</h3>
            <p className="text-sm text-muted-foreground">Lead created by {lead.createdBy.name} on {format(new Date(lead.createdAt), 'MMM dd, yyyy')}</p>
          </div>
        </div>
      </div>

      <LeadModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSuccess={fetchLead}
        lead={lead}
      />
    </div>
  );
};
