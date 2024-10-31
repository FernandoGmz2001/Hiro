'use client'
import Breadcrumb from "./Breadcrumb";
import InvitedUsers from "./InvitedUsers";
import { FaRegShareSquare } from "react-icons/fa";

export default function HeaderLeft({ workspace }: { workspace: string }) {
  return <>
    <div className="flex flex-col gap-2">
      <Breadcrumb sections={['Workspace', 'Test', 'Board']} />
      <h1 className="font-bold text-4xl">{workspace}</h1>
      <div className="flex gap-4 items-center">
        <InvitedUsers />
        <div className="flex gap-4 items-center border px-4 py-2 rounded-xl border-gray-300"><FaRegShareSquare /><p className="font-medium">Compartir</p></div>
      </div>
    </div>
  </>
}
