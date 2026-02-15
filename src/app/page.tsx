import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to English version by default
  // The middleware will detect user's language preference
  redirect('/en');
}
