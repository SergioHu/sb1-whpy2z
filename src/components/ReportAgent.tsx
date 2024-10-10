import React, { useState } from 'react'
import { FileText, Send } from 'lucide-react'

const ReportAgent: React.FC = () => {
  const [prompt, setPrompt] = useState('')
  const [reportType, setReportType] = useState('word')
  const [response, setResponse] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the prompt and report type to your backend
    // For now, we'll just set a mock response
    setResponse(`Generated ${reportType.toUpperCase()} report based on prompt: ${prompt}`)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Report Generation Agent</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Prompt for Report Generation
          </label>
          <textarea
            id="prompt"
            rows={4}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Describe the report you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-green-600"
                name="report-type"
                value="word"
                checked={reportType === 'word'}
                onChange={() => setReportType('word')}
              />
              <span className="ml-2">Word Document</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-green-600"
                name="report-type"
                value="pdf"
                checked={reportType === 'pdf'}
                onChange={() => setReportType('pdf')}
              />
              <span className="ml-2">PDF</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          <FileText className="inline-block mr-2" size={20} />
          Generate Report
        </button>
      </form>
      {response && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Agent Response:</h3>
          <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">{response}</pre>
        </div>
      )}
    </div>
  )
}

export default ReportAgent