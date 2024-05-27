"use client";
// import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Page = ({ params }: { params: { id: string } }) => {
    // const router = useRouter();

    useEffect(() => {
      // Redirect to the API endpoint with the provided id
      if (params.id) {
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/redirects`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ slug: params.id })
        })
        .then(response => {
          // Handle response if needed
          if (!response.ok) {
            throw new Error('Failed to redirect');
          }
        })
        .catch(error => {
          console.error('Failed to redirect:', error);
        });
      }
    }, [params.id]);
    return (
        <div>
           {` This is the post ${params.id}`}
        </div>
    )
}
export default Page;