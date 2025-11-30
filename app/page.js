'use client'
import DholeraPage from "@/components/features/Dholera/DholeraPage";
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Custom Navbar with modal state for this page only */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar setOpenModal={setOpenModal} />
      </div>
      <div className="pt-12">
        <DholeraPage openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </>
  );
}
