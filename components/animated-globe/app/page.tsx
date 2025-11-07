import { Globe } from "@/components/globe"

export default function Page() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      <div className="w-full max-w-4xl aspect-square">
        <Globe />
      </div>
    </main>
  )
}
