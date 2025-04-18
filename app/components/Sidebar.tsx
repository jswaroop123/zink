// zink-portfolio/app/components/Sidebar.tsx
export default function Sidebar() {
    return (
      <aside className="w-[280px] bg-[#1f1f1f] text-center p-6 hidden md:block">
        <div className="flex flex-col items-center">
          <img
            src="/icons/avatar.png"
            alt="Avatar"
            className="w-24 h-24 rounded-full border-2 border-yellow-400 mb-4"
          />
          <h2 className="text-lg font-semibold">Jyothi Swaroop N</h2>
          <p className="text-sm text-gray-400">Full StackDeveloper</p>
          <div className="mt-6 space-y-2 text-left text-sm">
            <p><strong>Email:</strong> jswaroop2003...</p>
            <p><strong>Phone:</strong> +91 93800*****</p>
            <p><strong>Location:</strong> Karnataka, India</p>
          </div>
        </div>
      </aside>
    );
  }
  