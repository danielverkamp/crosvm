initSidebarItems({"enum":[["Ac97Backend","AC97 audio device emulation. Provides the PCI interface for the internal Ac97 emulation. Internally the `Ac97BusMaster` and `Ac97Mixer` structs are used to emulated the bus master and mixer registers respectively. `Ac97BusMaster` handles moving smaples between guest memory and the audio backend."],["BusError",""],["BusType",""],["CoIommuUnpinPolicy","Holds the coiommu unpin policy"],["CrosvmDeviceId",""],["HostHotPlugKey","The key to identify hotplug device from host view. like host sysfs path for vfio pci device, host disk file path for virtio block device"],["IommuDevType",""],["ParseIommuDevTypeResult",""],["PciAddressError","PCI address parsing and conversion errors."],["PciClassCode","Classes of PCI nodes."],["PciDeviceError",""],["PciInterruptPin","PCI has four interrupt pins A->D."],["PitError",""],["ProxyError","Errors for proxy devices."],["PvPanicCode",""],["UnpinResponse",""]],"macro":[["impl_from_for_interconvertible_structs","Implements `From` between two structs whose each field implements `From` each other."],["impl_try_from_le32_for_enumn","Implements TryFrom<data_model::Le32> for an enum that implements `enumn::N`."],["register",""],["register_array",""],["static_register","Macro helps to build a static register."],["usb_debug",""]],"mod":[["acpi",""],["bat",""],["bus","Handles routing to devices in an address space."],["cmos",""],["debugcon",""],["direct_io",""],["direct_irq",""],["i8042",""],["irq_event",""],["irqchip",""],["pci","Implements pci devices and busses."],["pit",""],["pl030",""],["platform","Implements platform devices and busses."],["proxy","Runs hardware devices in child processes."],["register_space",""],["serial",""],["serial_device",""],["software_tpm","Software TPM backend using the TPM2 simulator from the `tpm2` crate."],["sys",""],["tsc","Handles operations using platform Time Stamp Counter (TSC)."],["usb",""],["utils",""],["vfio",""],["vfio_wrapper","Wraps VfioContainer for virtio-iommu implementation"],["virtio","Implements virtio devices, queues, and transport mechanisms."]],"struct":[["Ac97Dev",""],["Ac97Parameters","Holds the parameters for a AC97 device"],["BarRange","Pci Bar Range information"],["Bus","A device container for routing reads and writes over some address space."],["BusAccessInfo","Information about how a device was accessed."],["BusRange","Holds a base and length representing the address space occupied by a `BusDevice`."],["Cmos","A CMOS/RTC device commonly seen on x86 I/O port 0x70/0x71."],["CoIommuDev",""],["CoIommuParameters","Holds the parameters for a coiommu device"],["Debugcon",""],["I8042Device","A i8042 PS/2 controller that emulates just enough to shutdown the machine."],["IrqEdgeEvent","A structure suitable for implementing edge triggered interrupts in device backends."],["IrqLevelEvent","A structure suitable for implementing level triggered interrupts in device backends."],["PciAddress","PCI Device Address, AKA Bus:Device.Function"],["PciBridge",""],["PciBus","Pci Bus information"],["PciConfigIo","Emulates PCI configuration access mechanism #1 (I/O ports 0xcf8 and 0xcfc)."],["PciConfigMmio","Emulates PCI memory-mapped configuration access mechanism."],["PciRoot","Emulates the PCI Root bridge."],["PciVirtualConfigMmio","Inspired by PCI configuration space, CrosVM provides 1024 dword virtual registers (4KiB in total) for each PCI device. The guest can use these registers to exchange device-specific information with CrosVM. All these virtual registers from all PCI devices locate in a contiguous memory region. The base address of this memory region is provided by an IntObj named VCFG in the ACPI DSDT. The offset of each register is calculated in the same way as PCIe ECAM; i.e. offset = (bus << 20) | (device << 15) | (function << 12) | (register_index << 2)"],["PcieHostPort","Pcie root port device has a corresponding host pcie root port."],["PcieRootPort",""],["Pit",""],["ProxyDevice","Wraps an inner `BusDevice` that is run inside a child process via fork."],["PvPanicPciDevice",""],["Serial","Emulates serial COM ports commonly seen on x86 I/O ports 0x3f8/0x2f8/0x3e8/0x2e8."],["SoftwareTpm",""],["StubPciDevice",""],["StubPciParameters",""],["UnpinRequest",""],["VfioPciDevice","Implements the Vfio Pci device, then a pci device is added into vm"],["VfioPlatformDevice",""],["VirtioPciDevice","Implements the PCI transport for virtio devices."]],"trait":[["BusDevice","Trait for devices that respond to reads or writes in an arbitrary address space."],["BusDeviceObj","Trait for generic device abstraction, that is, all devices that reside on BusDevice and want to be converted back to its original type. Each new foo device must provide as_foo_device() + as_foo_device_mut() + into_foo_device(), default impl methods return None."],["BusDeviceSync",""],["BusResumeDevice",""],["HotPlugBus","Trait for devices that notify hotplug event into guest"],["PciDevice",""],["SerialDevice","Abstraction over serial-like devices that can be created given an event and optional input and output streams."]]});