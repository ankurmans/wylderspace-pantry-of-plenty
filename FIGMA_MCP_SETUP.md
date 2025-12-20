# Figma MCP Setup Guide

## Current Status: ❌ Not Connected

Based on the test, Figma MCP is **not currently configured**. Here's how to set it up:

## Option 1: Remote MCP Server (Recommended - Easiest)

The remote server doesn't require the Figma desktop app and works from anywhere.

### Steps:

1. **Update Cursor MCP Configuration**
   - Open Cursor Settings → MCP Servers
   - Add the following configuration:

```json
{
  "mcpServers": {
    "webflow": {
      "command": "npx",
      "args": ["mcp-remote", "https://mcp.webflow.com/mcp"]
    },
    "figma": {
      "command": "npx",
      "args": ["mcp-remote", "https://mcp.figma.com/mcp"]
    }
  }
}
```

2. **Restart Cursor**
   - Close and reopen Cursor for the changes to take effect

3. **Test the Connection**
   ```bash
   node scripts/test-figma-mcp.js
   ```

## Option 2: Desktop MCP Server (More Features)

The desktop server allows selection-based design context and requires the Figma desktop app.

### Steps:

1. **Enable Desktop MCP Server in Figma**
   - Open Figma desktop app (must be latest version)
   - Open any Figma design file
   - Press `Shift + D` to toggle Dev Mode
   - In the inspect panel, find "MCP server" section
   - Click "Enable desktop MCP server"
   - Note the local URL: `http://127.0.0.1:3845/mcp`

2. **Update Cursor MCP Configuration**
   - Open Cursor Settings → MCP Servers
   - Add:

```json
{
  "mcpServers": {
    "webflow": {
      "command": "npx",
      "args": ["mcp-remote", "https://mcp.webflow.com/mcp"]
    },
    "figma-desktop": {
      "command": "npx",
      "args": ["mcp-remote", "http://127.0.0.1:3845/mcp"]
    }
  }
}
```

3. **Restart Cursor**

4. **Test the Connection**
   ```bash
   node scripts/test-figma-mcp.js
   ```

## Testing the Connection

After setup, you can test by:

1. **Running the test script:**
   ```bash
   node scripts/test-figma-mcp.js
   ```

2. **Trying to use Figma MCP tools:**
   - Ask me to extract design tokens from a Figma file
   - Provide a Figma file URL or file key
   - I'll attempt to connect and extract tokens

## Using Figma MCP

Once connected, you can:

- **Extract Design Tokens**: Colors, typography, spacing, shadows
- **Get Component Information**: Component properties and structure
- **Sync Styles**: Automatically sync Figma styles to your codebase
- **Design Context**: Get design context for implementing designs

## Troubleshooting

### If connection fails:

1. **Check Figma Desktop App** (for desktop server):
   - Ensure it's running and updated
   - Dev Mode must be enabled
   - MCP server must be enabled in Dev Mode

2. **Check Network** (for remote server):
   - Ensure you can access `https://mcp.figma.com/mcp`
   - Check firewall settings

3. **Check Cursor Configuration**:
   - Verify MCP configuration is correct
   - Restart Cursor after changes
   - Check Cursor logs for errors

4. **Verify MCP Tools Available**:
   - In Cursor, check if Figma MCP tools appear in available tools
   - Look for tools like `mcp_figma_*` in the tool list

## Next Steps

After connecting:
1. Test with a Figma file URL
2. Extract design tokens
3. Sync tokens to `styles/tokens.css`
4. Update Tailwind config with Figma tokens

