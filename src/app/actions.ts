"use server"

import { supabase } from "@/lib/supabase"

export async function submitLead(data: {
  industry: string
  dealValue: number
  ghostingLeads: number
  recoveryPotential: number
}) {
  const { error } = await supabase.from("leads").insert([
    {
      industry: data.industry,
      deal_value: data.dealValue,
      ghosting_leads: data.ghostingLeads,
      recovery_potential: data.recoveryPotential,
    },
  ])

  if (error) {
    console.error("Error submitting lead:", error)
    return { success: false, error: error.message }
  }

  return { success: true }
}

export async function submitContact(data: {
  name: string
  email: string
  phone: string
  industry: string
  message: string
}) {
  const { error } = await supabase.from("contacts").insert([
    {
      name: data.name,
      email: data.email,
      phone: data.phone,
      industry: data.industry,
      message: data.message,
    },
  ])

  if (error) {
    console.error("Error submitting contact:", error)
    return { success: false, error: error.message }
  }

  return { success: true }
}
