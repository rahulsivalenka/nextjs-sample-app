'use client'

import { cn } from '@/lib/utils'
import { Option } from '@/types'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import {
  CommandInput,
  CommandEmpty,
  CommandList,
  CommandItem,
  Command,
} from '@/components/ui/command'
import { ChevronsUpDown, Check } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'

type ComboBoxProps = {
  name?: string
  options: Option[]
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  multiple?: boolean
  value?: Option['value'] | Option['value'][]
  onChange?: (value: Option['value'] | Option['value'][]) => void
}

export default function ComboBox({
  emptyMessage,
  options,
  placeholder,
  searchPlaceholder,
  multiple,
  value,
  onChange,
  name,
}: ComboBoxProps) {
  const [open, setOpen] = React.useState(false)
  const [localValue, setLocalValue] = React.useState<
    Option['value'][] | Option['value']
  >('')

  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const isControlled = value !== undefined && onChange != undefined
  value = isControlled ? value : localValue
  const setValue = isControlled ? onChange : setLocalValue

  if (!isControlled && !name) {
    throw new Error(
      'ComboBox: When using an uncontrolled component, a name must be provided.'
    )
  }

  const customFilter = (value: Option['value'], searchTerm: string) => {
    const option = options.find((option) => option.value === value)
    if (!option) return 0

    return option.label.toLowerCase().includes(searchTerm.toLowerCase()) ? 1 : 0
  }

  const values = Array.isArray(value) ? value : value ? [value] : []

  const selectedOptions = values?.length
    ? options
        .filter((option) => values.includes(option.value))
        ?.map((o) => o.label)
    : null

  const getDisplayText = () => {
    /* TODO: trim the shown value based on the length of the button */
    let displayText = 'Select'
    if (selectedOptions?.length) {
      if (selectedOptions.length === 1) {
        displayText = selectedOptions[0]
      } else {
        displayText = `${selectedOptions[0]} +${selectedOptions.length - 1}`
      }
    } else if (placeholder) {
      displayText = placeholder
    }

    return displayText
  }

  const handleOnSelect = (currentValue: string): void => {
    if (multiple) {
      const index = values.indexOf(currentValue)
      if (index > -1) {
        setValue(values.filter((_, i) => i !== index))
      } else {
        setValue([...values, currentValue])
      }
      return
    }

    setValue(currentValue === value ? '' : currentValue)
    setOpen(false)
  }

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={buttonRef}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between rounded-md px-3 font-normal hover:bg-background"
          >
            {getDisplayText()}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0"
          style={{
            width: buttonRef.current?.offsetWidth,
          }}
        >
          <Command filter={customFilter}>
            <CommandInput placeholder={searchPlaceholder || 'Search...'} />
            <CommandEmpty>{emptyMessage || 'No record found.'}</CommandEmpty>
            <CommandList>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleOnSelect}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === option.value || value?.includes(option.value)
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {!multiple && (
        <input type="hidden" name={name} value={value} aria-hidden="true" />
      )}
      {multiple &&
        Array.isArray(value) &&
        value.map((v) => (
          <input
            key={v}
            type="hidden"
            name={`${name}[]`}
            value={v}
            aria-hidden="true"
          />
        ))}
    </>
  )
}
