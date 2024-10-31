export default function Breadcrumb({ sections }: { sections: Array<string> }) {
  return (
    <div className="flex gap-2 text-gray-400 font-medium">
      {sections.map((section: string, index: number) => {
        return (<p>{section} {index < sections.length - 1 && '/'}</p>)
      })}
    </div>
  )
}
