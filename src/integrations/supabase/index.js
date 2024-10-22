// Import all the relevant exports from other files in the supabase directory
import { supabase } from './supabase.js';
import { SupabaseAuthProvider, useSupabaseAuth, SupabaseAuthUI } from './auth.jsx';
import {
  useAgencyHiveAi,
  useAgencyHiveAis,
  useAddAgencyHiveAi,
  useUpdateAgencyHiveAi,
  useDeleteAgencyHiveAi
} from './hooks/useAgencyHiveAi.js';

// Export all the imported functions and objects
export {
  supabase,
  SupabaseAuthProvider,
  useSupabaseAuth,
  SupabaseAuthUI,
  useAgencyHiveAi,
  useAgencyHiveAis,
  useAddAgencyHiveAi,
  useUpdateAgencyHiveAi,
  useDeleteAgencyHiveAi
};