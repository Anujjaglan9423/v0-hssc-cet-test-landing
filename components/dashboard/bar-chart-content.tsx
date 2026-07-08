"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface BarChartContentProps {
  data: Array<{ subject: string; avgScore: number }>
}

export function BarChartContent({ data }: BarChartContentProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis type="number" domain={[0, 100]} stroke="#888" fontSize={12} />
        <YAxis dataKey="subject" type="category" width={100} stroke="#888" fontSize={11} />
        <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
        <Bar dataKey="avgScore" fill="#10b981" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
