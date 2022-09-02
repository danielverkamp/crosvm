initSidebarItems({"constant":[["GFXSTREAM_RENDERER_FLAGS_ASYNC_FENCE_CB",""],["GFXSTREAM_RENDERER_FLAGS_GUEST_USES_ANGLE",""],["GFXSTREAM_RENDERER_FLAGS_NO_VK_BIT",""],["GFXSTREAM_RENDERER_FLAGS_THREAD_SYNC",""],["GFXSTREAM_RENDERER_FLAGS_USE_EGL","Flags for the gfxstream renderer."],["GFXSTREAM_RENDERER_FLAGS_USE_GLES",""],["GFXSTREAM_RENDERER_FLAGS_USE_GLX",""],["GFXSTREAM_RENDERER_FLAGS_USE_SURFACELESS",""],["GFXSTREAM_RENDERER_FLAGS_VULKAN_NATIVE_SWAPCHAIN_BIT",""],["RUTABAGA_BLOB_FLAG_USE_CROSS_DEVICE",""],["RUTABAGA_BLOB_FLAG_USE_MAPPABLE",""],["RUTABAGA_BLOB_FLAG_USE_SHAREABLE",""],["RUTABAGA_BLOB_MEM_GUEST","Blob resource creation parameters."],["RUTABAGA_BLOB_MEM_HOST3D",""],["RUTABAGA_BLOB_MEM_HOST3D_GUEST",""],["RUTABAGA_CAPSET_CROSS_DOMAIN",""],["RUTABAGA_CAPSET_DRM",""],["RUTABAGA_CAPSET_GFXSTREAM",""],["RUTABAGA_CAPSET_VENUS",""],["RUTABAGA_CAPSET_VIRGL","Rutabaga capsets."],["RUTABAGA_CAPSET_VIRGL2",""],["RUTABAGA_CHANNEL_TYPE_CAMERA",""],["RUTABAGA_CHANNEL_TYPE_WAYLAND","Rutabaga channel types"],["RUTABAGA_CONTEXT_INIT_CAPSET_ID_MASK","Rutabaga context init capset id mask."],["RUTABAGA_FENCE_HANDLE_TYPE_OPAQUE_FD",""],["RUTABAGA_FENCE_HANDLE_TYPE_SYNC_FD",""],["RUTABAGA_FLAG_FENCE","Rutabaga flags for creating fences."],["RUTABAGA_FLAG_INFO_RING_IDX",""],["RUTABAGA_MAP_CACHE_CACHED","Mapped memory caching flags (see virtio_gpu spec)"],["RUTABAGA_MAP_CACHE_UNCACHED",""],["RUTABAGA_MAP_CACHE_WC",""],["RUTABAGA_MEM_HANDLE_TYPE_DMABUF",""],["RUTABAGA_MEM_HANDLE_TYPE_OPAQUE_FD","Rutabaga handle types (memory and sync in same namespace)"],["RUTABAGA_MEM_HANDLE_TYPE_SHM",""],["RUTABAGA_PIPE_BIND_RENDER_TARGET",""],["RUTABAGA_PIPE_TEXTURE_2D","3D resource creation parameters.  Also used to create 2D resource.  Constants based on Mesa’s (internal) Gallium interface.  Not in the virtio-gpu spec, but should be since dumb resources can’t work with gfxstream/virglrenderer without this."],["RUTABAGE_FENCE_HANDLE_TYPE_OPAQUE_WIN32",""],["RUTABAGE_MEM_HANDLE_TYPE_OPAQUE_WIN32",""],["VIRGLRENDERER_DRM",""],["VIRGLRENDERER_NO_VIRGL",""],["VIRGLRENDERER_RENDER_SERVER",""],["VIRGLRENDERER_THREAD_SYNC",""],["VIRGLRENDERER_USE_ASYNC_FENCE_CB",""],["VIRGLRENDERER_USE_EGL","Flags for virglrenderer.  Copied from virglrenderer bindings."],["VIRGLRENDERER_USE_EXTERNAL_BLOB",""],["VIRGLRENDERER_USE_GLES",""],["VIRGLRENDERER_USE_GLX",""],["VIRGLRENDERER_USE_SURFACELESS",""],["VIRGLRENDERER_VENUS",""]],"enum":[["RutabagaComponentType","Enumeration of possible rutabaga components."],["RutabagaError","An error generated while using this crate."],["RutabagaWsi",""]],"struct":[["GfxstreamFlags","gfxstream flag struct."],["Resource3DInfo","Metadata associated with a swapchain, video or camera image."],["ResourceCreate3D",""],["ResourceCreateBlob",""],["RutabagaChannel","Information needed to open an OS-specific RutabagaConnection (TBD).  Only Linux hosts are considered at the moment."],["RutabagaFence","Convenience struct for Rutabaga fences"],["RutabagaFenceClosure","Fence handler implementation that wraps a closure"],["RutabagaHandle","Handle to OS-specific memory or synchronization objects."],["RutabagaIovec","Represents a buffer.  `base` contains the address of a buffer, while `len` contains the length of the buffer."],["Transfer3D","Transfers {to, from} 1D buffers, 2D textures, 3D textures, and cubemaps."],["VirglRendererFlags","virglrenderer flag struct."],["VulkanInfo","Memory index and physical device index of the associated VkDeviceMemory."]],"trait":[["RutabagaFenceCallback","Trait for fence completion handlers"]],"type":[["RutabagaFenceHandler","Wrapper type to allow cloning while respecting object-safety"],["RutabagaResult","The result of an operation in this crate."]]});