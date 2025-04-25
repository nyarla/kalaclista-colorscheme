all:
	@echo hi,

shell:
	@nix shell nixpkgs#bun

nix:
	@bun run scripts/nix.ts > dist/colorscheme.nix
