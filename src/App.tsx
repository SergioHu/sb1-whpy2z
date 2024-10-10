import React, { useState } from 'react'
import { FileUpload, FileText, Table } from 'lucide-react'
import ExcelAgent from './components/ExcelAgent'
import ReportAgent from './components/ReportAgent'

function App() {
  const [activeAgent, setActiveAgent] = useState<'excel' | 'report'>('excel')

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">AI Agent Assistant</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveAgent('excel')}
              className={`px-4 py-2 rounded-md ${
                activeAgent === 'excel'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Table className="inline-block mr-2" size={20} />
              Excel Agent
            </button>
            <button
              onClick={() => setActiveAgent('report')}
              className={`px-4 py-2 rounded-md ${
                activeAgent === 'report'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <FileText className="inline-block mr-2" size={20} />
              Report Agent
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {activeAgent === 'excel' ? <ExcelAgent /> : <ReportAgent />}
      </main>
      <footer className="bg-white shadow-md mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 text-center text-gray-500">
          &copy; 2024 AI Agent Assistant. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App