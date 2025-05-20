import { FaDownload, FaLink } from 'react-icons/fa6'

import PdfViewer from '@/components/common/pdf/PdfViewer'

export default function Page() {
	const actionButtons = (
		<div className='mx-2 my-8 grid grid-cols-2 gap-3'>
			<button className='border-secondary bg-surface-card text-text-muted flex items-center justify-center rounded-lg! border-1 py-2 text-sm! font-bold'>
				Copy Link
				<FaLink className='ml-2' />
			</button>
			<button className='border-secondary bg-surface-card text-text-muted flex items-center justify-center rounded-lg! border-1 py-2 text-sm! font-bold'>
				Download
				<FaDownload className='ml-2' />
			</button>
		</div>
	)

	return (
		<main className='mt-4 px-4'>
			<h2 className='text-link px-1 text-xl font-bold'>My Resume</h2>
			<h3 className='mb-10 px-1 text-2xl font-extrabold'>
				Learn more about my experience and skills
			</h3>
			<PdfViewer pdfUrl='/resumes/Nguyen-Quang-Vinh-CV.pdf' />
			{actionButtons}
		</main>
	)
}
