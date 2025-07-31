// app/general-settings/page.tsx (or .jsx if you're not using TS)

'use client';

import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function GeneralSettings() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6">General Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input placeholder="Title" />
        <Input placeholder="Copy Right" />
        <Input placeholder="Admin Footer Text" defaultValue="Development By" />
        <Input placeholder="Admin Footer Link Text" />
        <Input placeholder="Admin Footer Link" />
        <Input placeholder="App Link" defaultValue="https://drive.user..." />

        {/* Images */}
        <ImageBox label="Main Header Logo" />
        <ImageBox label="Common Header Logo" />
        <ImageBox label="Footer Logo" />
        <ImageBox label="Admin Logo" />
        <ImageBox label="Favicon" />
        <ImageBox label="Login Page Logo" />
        <ImageBox label="Login Page Image" customSrc="/images/login-page-img.png" />
      </div>

      <div className="mt-8">
        <Button className="bg-[#44682B] hover:bg-[#365520] text-white">Update</Button>
      </div>

    </div>
  );
}

function ImageBox({ label, customSrc }: { label: string; customSrc?: string }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm mb-1 text-gray-700 font-medium">{label}</label>
      <div className="h-[80px] border rounded flex items-center justify-center bg-white">
        <Image
          src={customSrc || '/images/logo-placeholder.png'}
          alt={label}
          width={100}
          height={60}
          className="object-contain"
        />
      </div>
    </div>
  );
}
