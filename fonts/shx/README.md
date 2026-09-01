# SHX Fonts

- Place `.shx` or `.ttf` files in this folder.
- `manifest.json` is **auto-generated** by the Vite plugin at dev-start and build time — do not edit it manually.
- Optional: provide `<font-name>.stroke.json` sidecar file to supply explicit stroke glyph geometry.

## Optional sidecar format (`*.stroke.json`)

```json
{
  "glyphs": {
    "A": [
      [[0.1, 0.0], [0.5, 1.0]],
      [[0.5, 1.0], [0.9, 0.0]]
    ]
  }
}
```

