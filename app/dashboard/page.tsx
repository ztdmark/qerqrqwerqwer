import { AppSidebar } from '@/components/app-sidebar'
import { AiChat } from '@/components/ai-chat'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset className="overflow-hidden">
        <SiteHeader />
        <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
          <AiChat />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}