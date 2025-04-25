all:
	@echo hi,

shell:
	@nix shell nixpkgs#bun

nix:
	@bun run scripts/nix.ts > dist/colorscheme.nix

typescript:
	@bun run scripts/typescript.ts > dist/colorscheme.ts
