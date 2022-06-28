initSidebarItems({"constant":[["PIT_CHANNEL0_IRQ","PIT tube 0 timer is connected to IRQ 0"]],"fn":[["kvm_default_irq_routing_table","Default x86 routing table.  Pins 0-7 go to primary pic and ioapic, pins 8-15 go to secondary pic and ioapic, and pins 16-23 go only to the ioapic."],["kvm_dummy_msi_routes",""],["routes_conflict","Convenience function for determining whether or not two irq routes conflict. Returns true if they conflict."]],"struct":[["KvmKernelIrqChip","IrqChip implementation where the entire IrqChip is emulated by KVM."],["KvmSplitIrqChip","The KvmSplitIrqsChip supports KVM’s SPLIT_IRQCHIP feature, where the PIC and IOAPIC are emulated in userspace, while the local APICs are emulated in the kernel. The SPLIT_IRQCHIP feature only supports x86/x86_64 so we only define this IrqChip in crosvm for x86/x86_64."]]});