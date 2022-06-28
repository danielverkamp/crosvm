initSidebarItems({"constant":[["IOAPIC_BASE_ADDRESS",""],["IOAPIC_MEM_LENGTH_BYTES",""],["IOAPIC_REG_ARBITRATION_ID",""],["IOAPIC_REG_ID",""],["IOAPIC_REG_VERSION",""],["IOAPIC_VERSION_ID",""],["IOEOIR_OFF",""],["IOREGSEL_DUMMY_UPPER_32_BITS_OFF",""],["IOREGSEL_OFF",""],["IOWIN_OFF",""],["IOWIN_SCALE",""],["RTC_IRQ",""]],"enum":[["IoapicError",""]],"fn":[["decode_irq_from_selector","Given an offset that was read from/written to, return a tuple of the relevant IRQ and whether the offset refers to the high bits of that register."],["encode_selector_from_irq","Given an IRQ and whether or not the selector should refer to the high bits, return a selector suitable to use as an offset to read to/write from."]],"struct":[["Ioapic",""]]});