export default function Header() {
  const links = [
    { name: 'O STUDIO', path: '/' },
    { name: 'PROJETOS', path: '' },
    { name: 'CONTATO', path: '' },
    { name: 'TENDÊNCIAS', path: '' },
  ]

  return (
    <header className="shadow-md w-full fixed top-0 left-0 flex justify-end">
      <nav className="md:flex w-3/5 justify-between py-4 mr-10">
        {links.map((link) => (
          <a className="pt-2 text-company-green" href={link.path}>{link.name}</a> // TODO change to NEXTJS Link component
        ))}
      </nav>
    </header>
  )
}
