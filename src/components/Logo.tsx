export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 320 40" {...props}>
      {/* AI in blue */}
      <text x="5" y="28" fontSize="20" fontWeight="bold" fill="#3b82f6">
        Miside
      </text>

      {/* Translator in red */}
      <text x="73" y="28" fontSize="20" fontWeight="bold" fill="#ef4444">
        Mita
      </text>
    </svg>
  )
}