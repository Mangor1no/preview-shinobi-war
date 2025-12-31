import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t-2 border-red-900/50 px-6 text-sm">
      {/* Red and Black Patterned Border */}

      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Left Column - Game Info */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.png"
              alt="ShinobiWAR"
              width={160}
              height={160}
            />
            <div className="flex gap-3">
              <a href="#">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
                </svg>
              </a>
            </div>
            <p className="text-gray-400  max-w-xs">
              Warning: Playing more than 180 minutes per day may negatively
              affect your health.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Email</span>
              <a
                href="mailto:support@32bitz.com"
                className=" hover:text-red-400 transition-colors"
              >
                support@32bitz.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Support hours</span>
              <p className="">8:00 AM - 6:00 PM, every day (GMT +7)</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="">
              <span className="font-semibold">More Information</span>
              <br />
            </p>
            <div className="flex flex-col gap-2">
              <a href="#" className=" hover:text-red-400 transition-colors">
                Customer Support
              </a>
              <a href="#" className=" hover:text-red-400 transition-colors">
                Download & Install
              </a>
              <a href="#" className=" hover:text-red-400 transition-colors">
                Term & Condition
              </a>
              <a href="#" className=" hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 border-t-2 border-red-900/50">
        <p className="container mx-auto text-gray-400 ">
          © {new Date().getFullYear()} 32BITZ COMPANY LIMITED. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
