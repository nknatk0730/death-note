'use client'
import { useCallback } from "react"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"

export const Form = () => {
  const searchParams = useSearchParams();
  const form = useForm();
  const router = useRouter();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    }, [searchParams]
  )

  return (
    <form onSubmit={form.handleSubmit((data) => {
      const query = createQueryString('targets', data.targets.split("\n").join(','));
      router.replace(`/?${query}`)
    })} className="container my-10 space-y-4">
        <Textarea {...form.register('targets')} />
        <Button>Create</Button>
      </form>
  )
}