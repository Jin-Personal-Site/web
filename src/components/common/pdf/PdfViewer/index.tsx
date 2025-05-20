'use client'

import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'

interface Props {
	pdfUrl: string
}

export default function PdfViewer({ pdfUrl }: Props) {
	return (
		<Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
			<Viewer
				fileUrl={pdfUrl}
				theme={{ theme: 'dark' }}
				defaultScale={SpecialZoomLevel.PageWidth}
			/>
		</Worker>
	)
}
