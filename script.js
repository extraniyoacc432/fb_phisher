     import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
      const SUPABASE_URL = 'https://azrpqmginscnlrrciebl.supabase.co';
      const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6cnBxbWdpbnNjbmxycmNpZWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyMDkzOTIsImV4cCI6MjA4Njc4NTM5Mn0.P_wtYRdQAwUaEgnUYbvVHEWH1V4LOABvZh-2hthhS4k';

      const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

      const form = document.getElementById('u_0_d_5u');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        try {
          const { data, error } = await supabase
            .from('users')
            .insert([{ name, email }])
            .select(); // return inserted row(s)

          if (error) throw error;
          // 
        } catch (err) {
         console.error(err);
        }
      });

      // Optional: load existing users
      async function loadUsers() {
        const { data, error } = await supabase.from('users').select('*').order('created_at', { ascending: false }).limit(10);
        if (error) {
          return;
        }
      }

      // Uncomment to load users on page load
      // loadUsers();

