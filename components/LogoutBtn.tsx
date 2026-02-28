"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { signOut } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";

const LogoutBtn = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
      router.push("/sign-in");
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Failed to logout. Please try again.");
    }
  };

  return (
    <Button variant="ghost" className="gap-2" onClick={handleLogout}>
      <LogOut className="w-4 h-4" />
      <span className="max-sm:hidden">Logout</span>
    </Button>
  );
};

export default LogoutBtn;
