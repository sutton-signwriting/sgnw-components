[Read Me](README.md) | 
[Using the Components](USAGE.md) | 
[&lt;sgnw-components />](SGNW-COMPONENTS.md) | 
[&lt;fsw-components />](FSW-COMPONENTS.md) | 
[Change Log](CHANGELOG.md)

---

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]


## [1.2.0] - 2026-07-04
### Added
- spec test infrastructure for Stencil components and global utilities
- tests covering color updates for SignWriting components

### Changed
- updated project dependencies, including Stencil 4 and current major dependency releases

### Fixed
- re-render components when SignWriting color CSS variables change
- support modern and alpha CSS color values in color handling
- keep button SVGs contained and padded under Stencil 4
- keep palette symbols centered, sized, colored, and top-left aligned while dragging under Stencil 4


## [1.1.0] - 2022-12-08
### Added
- components
- - fsw-button, fsw-palette, fsw-palette-symbol
- - sgnw-button, sgnw-palette, sgnw-palette-symbol


## [1.0.0] - 2022-07-12
### Added
- documentation
- components
- - sgnw-symbol, sgnw-sign, sgnw-vp
- - fsw-symbol, fsw-sign, fsw-vp


[Unreleased]: https://github.com/sutton-signwriting/sgnw-components/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/sutton-signwriting/sgnw-components/releases/tag/v1.2.0
[1.1.0]: https://github.com/sutton-signwriting/sgnw-components/releases/tag/v1.1.0
[1.0.0]: https://github.com/sutton-signwriting/sgnw-components/releases/tag/v1.0.0
