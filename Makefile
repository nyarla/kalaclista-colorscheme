all:
	@echo hi,

shell:
	@nix shell nixpkgs#bun

nix:
	@bun run scripts/nix.ts > dist/colorscheme.nix

typescript:
	@bun run scripts/typescript.ts > dist/colorscheme.ts

css:
	@bun run scripts/css.ts > dist/colorscheme.css

lua:
	@bun run scripts/lua.ts > dist/colorscheme.lua
