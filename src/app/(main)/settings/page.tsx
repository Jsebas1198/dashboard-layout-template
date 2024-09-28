"use client";

import React, { useState } from "react";
import Header from "@/components/globals/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

type UserSetting = {
  label: string;
  value: string;
  type: "text";
};

const mockSettings: UserSetting[] = [
  { label: "Username", value: "Juan", type: "text" },
  { label: "Email", value: "juan@example.com", type: "text" },
];

const Settings = () => {
  const [userSettings, setUserSettings] = useState<UserSetting[]>(mockSettings);

  return (
    <div className="w-full">
      {/* HEADER */}
      <Header name="Configuraciones" />
      <div className="overflow-x-auto mt-5 shadow-md">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-800 text-white">
            <TableRow>
              <TableHead className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Setting
              </TableHead>
              <TableHead className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Value
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userSettings.map((setting, index) => (
              <TableRow className="hover:bg-blue-50" key={setting.label}>
                <TableCell className="py-2 px-4">{setting.label}</TableCell>
                <TableCell className="py-2 px-4">
                  <Input
                    type="text"
                    className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    value={setting.value}
                    onChange={(e) => {
                      const settingsCopy = [...userSettings];
                      settingsCopy[index].value = e.target.value;
                      setUserSettings(settingsCopy);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Settings;
