"use client"

import { motion } from "framer-motion"
import { Github, Facebook, Mail, MessageCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import SectionTitle from "@/components/section-title"
import { TikTokIcon } from "@/components/icons/tiktok-icon"

export default function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/HoanQue",
      color: "bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      href: "https://www.facebook.com/MinhHuyTheDev/",
      color: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600",
    },
    {
      name: "TikTok",
      icon: <TikTokIcon className="h-5 w-5" />,
      href: "https://www.tiktok.com/@MS4wLjABAAAAlNfr_krcEBDKs93xwuBrpvITobBnuih-azIh-RTlDShaJ9QX5pDd4-IKnHBrgaWE?is_from_webapp=1&sender_device=pc",
      color: "bg-black hover:bg-gray-900 dark:bg-black dark:hover:bg-gray-900",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:tranminhhuya8@gmail.com",
      color: "bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600",
    },
    {
      name: "Zalo",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "#zalo-contacts",
      color: "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500",
    },
  ]

  const zaloContacts = [
    {
      name: "Minh Huy",
      phoneNumber: "0916786275",
      restricted: false,
    },
  ]

  return (
    <section id="contact" className="py-16">
      <SectionTitle>Ping Me Anytime</SectionTitle>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center mt-8 mb-12"
      >
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Let’s build something meaningful. Whether it’s a project, an idea, or just a good conversation — the inbox is open.🌟
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button asChild variant="default" size="lg" className={`rounded-full ${link.color} text-white`}>
              <a
                href={link.href}
                target={link.href.startsWith("#") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Zalo Contacts Section */}
      <div id="zalo-contacts" className="max-w-2xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-center mb-6 text-slate-800 dark:text-slate-200"
        >
          Zalo Contacts
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {zaloContacts.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-400" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 dark:text-slate-200">{contact.name}</h4>
                        <p className="text-slate-600 dark:text-slate-400">{contact.phoneNumber}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      {contact.restricted && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="mr-2 text-amber-500 dark:text-amber-400">
                                <AlertCircle className="h-5 w-5" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>This account is currently experiencing restrictions</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}

                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50"
                        asChild
                      >
                        <a href={`https://zalo.me/${contact.phoneNumber}`} target="_blank" rel="noopener noreferrer">
                          Connect
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
