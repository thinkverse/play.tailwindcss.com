import { useState, useEffect } from 'react'
import clsx from 'clsx'

export function Clear({
  initialContent,
  onCleared,
  onClearedComplete,
  isLoading,
}) {
  const [{ state }, setState] = useState({
    state: 'disabled'
  })

  useEffect(() => (isLoading) ?
    setState({ state: 'disabled' }):
    setState({ state: 'idle' })
  , [isLoading])

  return (
    <div className="items-center hidden min-w-0 space-x-4 sm:flex">
      <button
        type="button"
        className={clsx(
          'relative flex-none rounded-md border border-gray-200 text-sm font-medium leading-5 py-1.5 px-4 focus:border-turquoise-400 focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:border-transparent dark:focus:bg-gray-700 dark:focus:border-turquoise-500',
          {

            'opacity-50 cursor-auto': state === 'disabled',
            'hover:bg-gray-50 dark:hover:bg-gray-700': state !== 'disabled',
          }
        )}
        onClick={() => onCleared({
            ...initialContent,
            html: "",
          }, (content) => {
            onClearedComplete(content)
          })
        }
      >
        <span
          className="inset-0 flex items-center justify-center"
          aria-hidden="false"
        >
          Clear
        </span>
      </button>
    </div>
  )
}
