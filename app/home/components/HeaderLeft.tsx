import Breadcrumb from "./Breadcrumb";

export default function HeaderLeft({workspace}:{workspace: string}){
  return <>
    <div className="flex flex-col gap-2">
      <Breadcrumb sections={['Workspace','Test','Board']}/>
      <h1 className="font-bold text-4xl">{workspace}</h1>
    </div>
  </>
}
