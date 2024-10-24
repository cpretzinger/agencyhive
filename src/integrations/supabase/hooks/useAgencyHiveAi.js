import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/*
### AgencyHiveAi

| name       | type                     | format | required |
|------------|--------------------------|--------|----------|
| id         | int8                     | number | true     |
| created_at | timestamp with time zone | string | true     |
| first_name | text                     | string | false    |
| last_name  | text                     | string | false    |
| email      | text                     | string | false    |
| phone      | text                     | string | false    |

Note: 
- id is a Primary Key.
- created_at defaults to now().
*/

export const useAgencyHiveAi = (id) => useQuery({
    queryKey: ['agencyHiveAi', id],
    queryFn: () => fromSupabase(supabase.from('AgencyHiveAi').select('*').eq('id', id).single()),
});

export const useAgencyHiveAis = () => useQuery({
    queryKey: ['agencyHiveAis'],
    queryFn: () => fromSupabase(supabase.from('AgencyHiveAi').select('*')),
});

export const useAddAgencyHiveAi = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUser) => fromSupabase(supabase.from('AgencyHiveAi').insert([{
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            phone: newUser.phone
        }])),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['agencyHiveAis'] });
        },
    });
};

export const useUpdateAgencyHiveAi = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('AgencyHiveAi').update(updateData).eq('id', id)),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['agencyHiveAis'] });
            queryClient.invalidateQueries({ queryKey: ['agencyHiveAi', variables.id] });
        },
    });
};

export const useDeleteAgencyHiveAi = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('AgencyHiveAi').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['agencyHiveAis'] });
        },
    });
};