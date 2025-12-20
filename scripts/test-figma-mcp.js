#!/usr/bin/env node

/**
 * Test script to check if Figma MCP is connected
 * 
 * Usage: node scripts/test-figma-mcp.js
 */

console.log('Testing Figma MCP connection...\n')

// Check if we're in a Cursor environment with MCP
const hasMCP = typeof process.env.MCP_SERVERS !== 'undefined' || 
               typeof process.env.FIGMA_MCP !== 'undefined'

console.log('Environment check:')
console.log(`  - MCP_SERVERS: ${process.env.MCP_SERVERS || 'Not set'}`)
console.log(`  - FIGMA_MCP: ${process.env.FIGMA_MCP || 'Not set'}`)
console.log(`  - Has MCP environment: ${hasMCP}\n`)

// Try to import the Figma MCP utilities
try {
  const figmaMCP = require('../lib/figma-mcp.ts')
  console.log('✅ Figma MCP utilities module found')
  console.log('   Available functions:')
  console.log('   - connectToFigmaMCP()')
  console.log('   - extractDesignTokens()')
  console.log('   - syncDesignTokens()')
  console.log('   - tokensToCSSVariables()\n')
} catch (error) {
  console.log('❌ Could not load Figma MCP utilities:', error.message)
}

// Check for Figma MCP server configuration
const fs = require('fs')
const path = require('path')
const os = require('os')

const cursorMcpPath = path.join(os.homedir(), '.cursor', 'projects', 'Users-ankurhappeo-wylderspace', 'mcps')
const globalMcpPath = path.join(os.homedir(), '.cursor', 'mcps')

console.log('Checking for MCP configuration files:')
console.log(`  - Project MCP path: ${cursorMcpPath}`)
console.log(`  - Global MCP path: ${globalMcpPath}`)

if (fs.existsSync(cursorMcpPath)) {
  console.log('  ✅ Project MCP directory exists')
  const files = fs.readdirSync(cursorMcpPath)
  console.log(`  Files found: ${files.join(', ')}`)
} else {
  console.log('  ❌ Project MCP directory not found')
}

if (fs.existsSync(globalMcpPath)) {
  console.log('  ✅ Global MCP directory exists')
  const files = fs.readdirSync(globalMcpPath)
  console.log(`  Files found: ${files.join(', ')}`)
} else {
  console.log('  ❌ Global MCP directory not found')
}

console.log('\n📋 Summary:')
console.log('To connect Figma MCP:')
console.log('1. Install Figma MCP server (remote or desktop)')
console.log('2. Configure in Cursor MCP settings')
console.log('3. Restart Cursor')
console.log('4. Run this test again to verify connection')

