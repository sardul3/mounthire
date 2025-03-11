"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  type: "contact" | "newsletter"
}

export default function SuccessModal({
  isOpen,
  onClose,
  title,
  description,
  type,
}: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-6 rounded-full bg-green-100 p-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="h-6 w-6 text-green-600" />
            </motion.div>
          </div>

          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center mb-2">
              {title}
            </DialogTitle>
            <DialogDescription className="text-center text-gray-500">
              {description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6">
            {type === "contact" ? (
              <p className="text-sm text-gray-500 mb-4">
                We'll get back to you as soon as possible. Meanwhile, feel free to explore our resources.
              </p>
            ) : (
              <p className="text-sm text-gray-500 mb-4">
                You'll start receiving our latest updates, job recommendations, and career tips.
              </p>
            )}
            <Button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full"
            >
              Got it, thanks!
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
} 