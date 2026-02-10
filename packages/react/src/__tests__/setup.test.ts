/**
 * Unit tests for Tailwind CSS v4 setup verification
 *
 * These tests verify that the Tailwind CSS v4 configuration is correctly set up
 * and all required files and configurations are in place.
 */
import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'

const packageRoot = resolve(__dirname, '../..')

describe('Tailwind CSS v4 Setup', () => {
  describe('Package Dependencies', () => {
    const packageJson = JSON.parse(
      readFileSync(resolve(packageRoot, 'package.json'), 'utf-8'),
    )

    it('should have tailwindcss as devDependency', () => {
      expect(packageJson.devDependencies).toHaveProperty('tailwindcss')
      expect(packageJson.devDependencies.tailwindcss).toMatch(/^\^4\./)
    })

    it('should have @tailwindcss/vite as devDependency', () => {
      expect(packageJson.devDependencies).toHaveProperty('@tailwindcss/vite')
      expect(packageJson.devDependencies['@tailwindcss/vite']).toMatch(/^\^4\./)
    })

    it('should have tailwind-variants as dependency', () => {
      expect(packageJson.dependencies).toHaveProperty('tailwind-variants')
    })

    it('should NOT have @stitches/react as dependency', () => {
      expect(packageJson.dependencies).not.toHaveProperty('@stitches/react')
    })

    it('should NOT have @igortullio-ui/tokens as devDependency', () => {
      expect(packageJson.devDependencies).not.toHaveProperty(
        '@igortullio-ui/tokens',
      )
    })
  })

  describe('Vite Configuration', () => {
    it('should have vite.config.ts file', () => {
      const viteConfigPath = resolve(packageRoot, 'vite.config.ts')
      expect(existsSync(viteConfigPath)).toBe(true)
    })

    it('should import @tailwindcss/vite plugin', () => {
      const viteConfig = readFileSync(
        resolve(packageRoot, 'vite.config.ts'),
        'utf-8',
      )
      expect(viteConfig).toContain('@tailwindcss/vite')
      expect(viteConfig).toContain('tailwindcss()')
    })
  })

  describe('CSS Entry Point', () => {
    const globalsPath = resolve(packageRoot, 'src/styles/globals.css')

    it('should have globals.css file', () => {
      expect(existsSync(globalsPath)).toBe(true)
    })

    it('should use @import "tailwindcss" syntax', () => {
      const css = readFileSync(globalsPath, 'utf-8')
      expect(css).toContain('@import "tailwindcss"')
    })

    it('should have @source directive for component scanning', () => {
      const css = readFileSync(globalsPath, 'utf-8')
      expect(css).toContain('@source')
      expect(css).toContain('components')
    })

    it('should have @theme inline directive', () => {
      const css = readFileSync(globalsPath, 'utf-8')
      expect(css).toContain('@theme inline')
    })

    describe('Design Tokens', () => {
      const css = readFileSync(globalsPath, 'utf-8')

      it('should define color tokens', () => {
        expect(css).toContain('--color-white')
        expect(css).toContain('--color-black')
        expect(css).toContain('--color-gray-100')
        expect(css).toContain('--color-gray-900')
        expect(css).toContain('--color-ignite-300')
        expect(css).toContain('--color-ignite-500')
      })

      it('should define font family tokens', () => {
        expect(css).toContain('--font-default')
        expect(css).toContain('--font-code')
      })

      it('should define font size tokens', () => {
        expect(css).toContain('--font-size-xxs')
        expect(css).toContain('--font-size-sm')
        expect(css).toContain('--font-size-md')
        expect(css).toContain('--font-size-lg')
      })

      it('should define font weight tokens', () => {
        expect(css).toContain('--font-weight-regular')
        expect(css).toContain('--font-weight-medium')
        expect(css).toContain('--font-weight-bold')
      })

      it('should define line height tokens', () => {
        expect(css).toContain('--line-height-shorter')
        expect(css).toContain('--line-height-base')
        expect(css).toContain('--line-height-tall')
      })

      it('should define border radius tokens', () => {
        expect(css).toContain('--radius-xs')
        expect(css).toContain('--radius-sm')
        expect(css).toContain('--radius-md')
        expect(css).toContain('--radius-lg')
        expect(css).toContain('--radius-full')
      })

      it('should define spacing tokens', () => {
        expect(css).toContain('--spacing-1')
        expect(css).toContain('--spacing-4')
        expect(css).toContain('--spacing-8')
        expect(css).toContain('--spacing-16')
      })
    })
  })

  describe('tsup Configuration', () => {
    it('should have tsup.config.ts file', () => {
      const tsupConfigPath = resolve(packageRoot, 'tsup.config.ts')
      expect(existsSync(tsupConfigPath)).toBe(true)
    })

    it('should have reference to Tailwind CLI for CSS compilation', () => {
      const tsupConfig = readFileSync(
        resolve(packageRoot, 'tsup.config.ts'),
        'utf-8',
      )
      // CSS is now compiled by Tailwind CLI separately, not by tsup
      expect(tsupConfig).toContain('Tailwind CLI')
      expect(tsupConfig).toContain('build:css')
    })

    it('should document styles.css output', () => {
      const tsupConfig = readFileSync(
        resolve(packageRoot, 'tsup.config.ts'),
        'utf-8',
      )
      // Documentation should mention styles.css output
      expect(tsupConfig).toContain('styles.css')
    })
  })

  describe('Build Scripts', () => {
    const packageJson = JSON.parse(
      readFileSync(resolve(packageRoot, 'package.json'), 'utf-8'),
    )

    it('should have build:css script using Tailwind CLI', () => {
      expect(packageJson.scripts).toHaveProperty('build:css')
      expect(packageJson.scripts['build:css']).toContain('@tailwindcss/cli')
      expect(packageJson.scripts['build:css']).toContain('globals.css')
      expect(packageJson.scripts['build:css']).toContain('styles.css')
    })

    it('should have build:js script using tsup', () => {
      expect(packageJson.scripts).toHaveProperty('build:js')
      expect(packageJson.scripts['build:js']).toContain('tsup')
    })

    it('should have build script that runs both JS and CSS builds', () => {
      expect(packageJson.scripts).toHaveProperty('build')
      expect(packageJson.scripts.build).toContain('build:js')
      expect(packageJson.scripts.build).toContain('build:css')
    })
  })

  describe('Package Exports', () => {
    const packageJson = JSON.parse(
      readFileSync(resolve(packageRoot, 'package.json'), 'utf-8'),
    )

    it('should have exports field', () => {
      expect(packageJson).toHaveProperty('exports')
    })

    it('should export styles.css', () => {
      expect(packageJson.exports).toHaveProperty('./styles.css')
      expect(packageJson.exports['./styles.css']).toBe('./dist/styles.css')
    })

    it('should export main entry with types', () => {
      expect(packageJson.exports['.']).toHaveProperty('import')
      expect(packageJson.exports['.']).toHaveProperty('require')
      expect(packageJson.exports['.'].import).toHaveProperty('types')
      expect(packageJson.exports['.'].require).toHaveProperty('types')
    })
  })

  describe('Source Files Distribution', () => {
    const packageJson = JSON.parse(
      readFileSync(resolve(packageRoot, 'package.json'), 'utf-8'),
    )

    it('should include src in files for @source directive support', () => {
      expect(packageJson.files).toContain('src')
    })

    it('should include dist in files', () => {
      expect(packageJson.files).toContain('dist')
    })
  })
})

describe('Zero Configuration Approach', () => {
  it('should NOT have tailwind.config.js file', () => {
    const configJsPath = resolve(packageRoot, 'tailwind.config.js')
    expect(existsSync(configJsPath)).toBe(false)
  })

  it('should NOT have tailwind.config.ts file', () => {
    const configTsPath = resolve(packageRoot, 'tailwind.config.ts')
    expect(existsSync(configTsPath)).toBe(false)
  })

  it('should NOT have postcss.config.js file (using @tailwindcss/vite instead)', () => {
    const postcssPath = resolve(packageRoot, 'postcss.config.js')
    expect(existsSync(postcssPath)).toBe(false)
  })
})
