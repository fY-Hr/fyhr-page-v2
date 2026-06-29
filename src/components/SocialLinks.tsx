export function SocialLinks() {
  return (
    <div className="flex justify-between mt-2">
      <div className="flex gap-1 items-center">
        <a
          href="https://github.com/fy-hr"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="hover:rotate-6 duration-200 transition-all"
        >
          <img
            src="/github-icon.svg"
            alt=""
            className="h-6 w-6 invert opacity-60 transition-opacity hover:opacity-100"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-fakhry-haidar-1a1226276"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="hover:rotate-6 duration-200 transition-all"
        >
          <img
            src="/linkedin-icon.svg"
            alt=""
            className="h-8 w-8 invert opacity-60 transition-opacity hover:opacity-100"
          />
        </a>
        <a
          href="mailto:anteikuwute@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
          className="hover:rotate-6 duration-200 transition-all"
        >
          <img
            src="/gmail-icon.svg"
            alt=""
            className="h-7 w-7 invert opacity-60 transition-opacity hover:opacity-100"
          />
        </a>
      </div>
    </div>
  )
}
