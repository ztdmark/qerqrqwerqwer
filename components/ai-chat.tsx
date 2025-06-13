"use client"

import * as React from "react"
import { 
  SendIcon, 
  SparklesIcon, 
  SearchIcon, 
  PaperclipIcon,
  BookOpenIcon,
  CodeIcon,
  GraduationCapIcon
} from "lucide-react"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const suggestedQuestions = [
  "How does AI work?",
  "Are black holes real?",
  "How many Rs are in the word \"strawberry\"?",
  "What is the meaning of life?"
]

const quickActions = [
  { icon: SparklesIcon, label: "Create", color: "text-purple-400" },
  { icon: BookOpenIcon, label: "Explore", color: "text-blue-400" },
  { icon: CodeIcon, label: "Code", color: "text-green-400" },
  { icon: GraduationCapIcon, label: "Learn", color: "text-orange-400" }
]

export function AiChat() {
  const [message, setMessage] = React.useState("")
  const [selectedModel, setSelectedModel] = React.useState("gemini-2.5-flash")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Handle message submission
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  const handleQuestionClick = (question: string) => {
    setMessage(question)
  }

  return (
    <div className="flex flex-col h-full w-full">
      {/* Main content area - scrollable */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-4 overflow-y-auto">
        {/* Main heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-medium text-white mb-4">
            How can I help you, Tails?
          </h1>
          
          {/* Quick action buttons */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {quickActions.map((action) => (
              <Button
                key={action.label}
                variant="ghost"
                className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <action.icon className={`h-4 w-4 ${action.color}`} />
                {action.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Suggested questions */}
        <div className="w-full max-w-2xl space-y-2">
          {suggestedQuestions.map((question, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:bg-accent/50 transition-colors cursor-pointer"
              onClick={() => handleQuestionClick(question)}
            >
              <div className="p-3">
                <p className="text-foreground text-sm">{question}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Chat input - sticky at bottom */}
      <div className="flex-shrink-0 w-full border-t border-gray-700 bg-sidebar">
        <div className="w-full max-w-4xl mx-auto px-4 py-2">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full bg-sidebar border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/60 pr-20 py-3 text-base rounded-xl focus:ring-2 focus:ring-sidebar-ring focus:border-transparent"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                >
                  <PaperclipIcon className="h-4 w-4" />
                </Button>
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                  disabled={!message.trim()}
                >
                  <SendIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>

          {/* Bottom controls */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="w-48 bg-transparent border-sidebar-border text-sidebar-foreground text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-sidebar border-sidebar-border">
                  <SelectItem value="gemini-2.5-flash" className="text-sidebar-foreground">
                    Gemini 2.5 Flash
                  </SelectItem>
                  <SelectItem value="gpt-4" className="text-sidebar-foreground">
                    GPT-4
                  </SelectItem>
                  <SelectItem value="claude-3" className="text-sidebar-foreground">
                    Claude 3
                  </SelectItem>
                </SelectContent>
              </Select>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
              >
                <SearchIcon className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}