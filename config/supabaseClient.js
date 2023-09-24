import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANNON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)


async function fetchBusDetails() {
    const { data, error } = await supabase.from('bus_details').select('*');
  
    if (error) {
      console.error('Error fetching bus details:', error);
    } else {
      // Process the data and update your HTML here
      // For example, you can create a table and populate it with the data.
    }
  }
  
  fetchBusDetails();