import { FC } from 'react';

import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock: FC<CodeProps> = function ({
	node,
	inline,
	className,
	children,
	ref,
	...props
}) {
	const match = /language-(\w+)/.exec(className || '');
	const language = match?.[1];

	return !inline && match ? (
		<SyntaxHighlighter
			style={atomDark}
			language={language}
			PreTag="div"
			showLineNumbers
			{...props}
		>
			{String(children).replace(/\n$/, '')}
		</SyntaxHighlighter>
	) : (
		<code className={className} {...props}>
			{children}
		</code>
	);
};

export default CodeBlock;
