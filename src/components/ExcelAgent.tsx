import React, { useState } from 'react'
import { Upload, Send } from 'lucide-react'

const ExcelAgent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the file and prompt to your backend
    // For now, we'll just set a mock response
    setResponse(`Processed file: ${file?.name}\nPrompt: ${prompt}\n\nMacro created successfully!`)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Excel Macro Agent</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
            Upload CSV File
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">CSV file (MAX. 10MB)</p>
              </div>
              <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept=".csv" />
            </label>
          </div>
          {file && <p className="mt-2 text-sm text-gray-600">Selected file: {file.name}</p>}
        </div>
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Prompt for Excel Macro
          </label>
          <textarea
            id="prompt"
            rows={4}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Describe the macro you want to create..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <Send className="inline-block mr-2" size={20} />
          Generate Macro
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

export default ExcelAgent