import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = process.cwd()
const htmlPath = resolve(root, 'dist/index.html')
const vite = await createServer({
  configFile: resolve(root, 'vite.config.js'),
  appType: 'custom',
  server: { middlewareMode: true },
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const page = renderToString(React.createElement(App))
  const shell = await readFile(htmlPath, 'utf8')
  const mount = '<div id="root"></div>'

  if (!shell.includes(mount)) {
    throw new Error('Could not find the empty root element in dist/index.html.')
  }

  await writeFile(htmlPath, shell.replace(mount, `<div id="root">${page}</div>`))
  console.log(`Pre-rendered the homepage (${page.length.toLocaleString()} HTML characters).`)
} finally {
  await vite.close()
}
