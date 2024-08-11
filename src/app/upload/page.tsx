import Upload from '@/components/Upload';
import 'dotenv/config';

export default function page() {
  const uploadApi = process.env.UPLOAD_API || '';

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Upload uploadApi={uploadApi} />
    </main>
  );
}
