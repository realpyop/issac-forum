import { createClient } from '@supabase/supabase-js';

const URL = "https://vwftvcqpezrjzdkrssjb.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3ZnR2Y3FwZXpyanpka3Jzc2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5MTY3MjcsImV4cCI6MjAyOTQ5MjcyN30.pzROvKXf1T9iOCjsXQpr9_10-8NyA9iuBNePXo8R3jk"

export const supabase = createClient(URL, API_KEY);