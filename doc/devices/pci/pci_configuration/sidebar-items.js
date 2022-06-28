initSidebarItems({"constant":[["BAR0_REG",""],["BAR_IO_ADDR_MASK",""],["BAR_IO_MIN_SIZE",""],["BAR_MEM_ADDR_MASK",""],["BAR_MEM_MIN_SIZE",""],["BAR_ROM_MIN_SIZE",""],["CAPABILITY_LIST_HEAD_OFFSET",""],["CAPABILITY_MAX_OFFSET",""],["CLASS_REG",""],["CLASS_REG_REVISION_ID_OFFSET",""],["COMMAND_REG",""],["COMMAND_REG_IO_SPACE_MASK",""],["COMMAND_REG_MEMORY_SPACE_MASK",""],["FIRST_CAPABILITY_OFFSET",""],["HEADER_TYPE_MULTIFUNCTION_MASK",""],["HEADER_TYPE_REG",""],["INTERRUPT_LINE_PIN_REG",""],["NUM_BAR_REGS",""],["NUM_CONFIGURATION_REGISTERS",""],["PCI_CAP_NEXT_POINTER",""],["PCI_ID_REG",""],["ROM_BAR_IDX",""],["ROM_BAR_REG",""],["STATUS_REG",""],["STATUS_REG_CAPABILITIES_USED_MASK",""]],"enum":[["Error",""],["PciBarPrefetchable",""],["PciBarRegionType","See pci_regs.h in kernel"],["PciBridgeSubclass","Subclasses of the BridgeDevice"],["PciCapabilityID","Types of PCI capabilities."],["PciClassCode","Classes of PCI nodes."],["PciClassCodeParseError",""],["PciDisplaySubclass","Subclasses of the DisplayController class."],["PciHeaderType","Represents the types of PCI headers allowed in the configuration registers."],["PciMultimediaSubclass","Subclasses of the MultimediaController class."],["PciOtherSubclass","Subclasses for PciClassCode Other."],["PciSerialBusSubClass","Subclass of the SerialBus"]],"struct":[["PciBarConfiguration",""],["PciBarIter",""],["PciConfiguration","Contains the configuration space of a PCI node. See the specification. The configuration space is accessed with DWORD reads and writes from the guest."]],"trait":[["PciCapability","A PCI capability list. Devices can optionally specify capabilities in their configuration space."],["PciProgrammingInterface","A PCI class programming interface. Each combination of `PciClassCode` and `PciSubclass` can specify a set of register-level programming interfaces. This trait is implemented by each programming interface. It allows use of a trait object to generate configurations."],["PciSubclass","A PCI sublcass. Each class in `PciClassCode` can specify a unique set of subclasses. This trait is implemented by each subclass. It allows use of a trait object to generate configurations."]],"type":[["PciBarIndex",""],["Result",""]]});