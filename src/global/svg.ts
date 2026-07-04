export const addSvgStyle = function(svg: string, style: string): string {
  if (!svg) return svg;

  return svg.replace(/<svg\b([^>]*)>/i, (match, attrs) => {
    const styleMatch = attrs.match(/\sstyle=(["'])(.*?)\1/i);

    if (styleMatch) {
      return match.replace(styleMatch[0], ` style=${styleMatch[1]}${style};${styleMatch[2]}${styleMatch[1]}`);
    }

    return `<svg${attrs} style="${style}">`;
  });
}

export const addSvgClassStyle = function(svg: string, className: string, style: string): string {
  if (!svg) return svg;

  return svg.replace(/<[^/!][^>]*\bclass=(["'])([^"']*)\1[^>]*>/gi, (match, _quote, classes) => {
    if (!classes.split(/\s+/).includes(className)) {
      return match;
    }

    const styleMatch = match.match(/\sstyle=(["'])(.*?)\1/i);
    if (styleMatch) {
      return match.replace(styleMatch[0], ` style=${styleMatch[1]}${styleMatch[2]};${style}${styleMatch[1]}`);
    }

    return match.replace(/>$/, ` style="${style}">`);
  });
}
